DOCUMENTANDO
El proyecto a continuació simula un Ecommerce donde se comercializan Hamburguesas.

DEPENDENCIA NPM
*React-router-dom

ANALISIS DE COMPONENTES

La ruta inicial es '/' donde se pueden ver todas las opciones (CARDS) que se pueden pedir. Cada producto tiene su imagen, precio y detalle.

*ItemLisContainer: Aqui se muestran todos los productos.

*ItemList: Componente que trae los datos desde el componente Item.

*Item: Componente que se puede visualizar en cada Card; datos de cada producto.

La ruta '/categoria/:categoriaId' permite hacer un filtro por categorias, en este caso; Carne, Pollo, Vegan. que se pueden visualizar en el Navbar.

*ItemDetail: presenta la estrucutra de una card con un poco mas de detalle sobre el producto.

*ItemDetailcontainer recibe el itemDetail para mostarlo cuando se solicita mas informacion sobre algun producto.
