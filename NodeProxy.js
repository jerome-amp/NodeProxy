
const $ = (selector, parent = document) =>
{
	let nodes = parent.querySelectorAll(selector);
	
	return nodes.length == 1 ? nodes[0] : new Proxy(nodes, handler);
}

const handler =
{
	get(target, property, receiver)
	{
		if(typeof target[0][property] == 'function')
		{
			return (...args) =>
			{
				console.log(args);
				
				target.forEach(element =>
				{
					element[property].apply(element, args);
				});
			}
		}
		
		let elements = [];
		
		target.forEach(element =>
		{
			elements.push(element[property]);
		});
		
		return new Proxy(elements, handler);
	},
	set(target, property, value)
	{
		target.forEach(element =>
		{
			element[property] = value;
		})
		
		return true;
	}
};
