# NodeProxy

```

document.body = document.createElement('body');
document.body.appendChild(document.createElement('h1'));
document.body.appendChild(document.createElement('h2'));
document.body.appendChild(document.createElement('h2'));

$('h1').innerHTML = 'h1';
$('h2').innerHTML = 'h2';

$('h1').style.color = '#FF0000';
$('h2').style.color = '#0000FF';

$('h1').addEventListener('click', function(){ this.style.color = '#0000FF'; });
$('h2').addEventListener('click', function(){ this.style.color = '#FF0000'; });

```

## Author

**Jérôme Taillandier**

## License

This project is licensed under the WTFPL License - see the [LICENSE.md](LICENSE.md) file for details
