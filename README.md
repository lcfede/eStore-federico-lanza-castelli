# NFT Marketplace

Se crea un AppBar con las opciones "Marketplace", "Explore", "Login", "Sign up", "User profile" y "Cart"
Actualmente las opciones "Marketplace" y "Explore" permiten navegar de acuerdo a la categoria seleccionada.

- Marketplace: acción que redirige al home

- Explore: visualiza el listado de categorias (actualmente estamos usando una fakeapi, por lo tanto los productos visualizados 
y las categorias seleccionadas no coinciden, pero cada click busca y carga una nueva categoria diferente de la fakeapi).

- Login, SignUp, Profile y Cart aun no funcionan.



## Hooks utilizados

- useState
- useEffect
- useNavigate
- useParams
- useFetch (custom hook para realizar las peticiones a la API)



### Packages utilizados

- React Router DOM
- Material UI (MUI)
- Animate.css



#### Comandos utilizados

`npm install` para instalar paquetes nuevas dependencias. Ej (npm install react-router-dom)    
`npm start` para levantar el proyecto