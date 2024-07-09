//app.js
const express = require('express');
const exphbs = require('express-handlebars').engine;

const app = express();
const port = process.env.PORT || 3000;

//cau hinh Handlebars lam view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Middleware de phuc vu cac tep ti~nh tu` thu muc PUBLIC
app.use(express.static(__dirname + '/public'));

//Du lieu san  pham
const products = [
    { name: 'Product 1', image:'/img/product1.jpg' },
    { name: 'Product 2', image:'/img/product2.jpg' },
];

//Dinh nghia cac route
app.get('/', (req, res) => {
    //render view 'home.handlebars' voi du lieu truyen vao
    res.render('home', { title: 'Home Page', message: 'Welcome to our website'});
});

app.get('/about', (req, res) => {
    //render view 'about.handlebars' voi du lieu truyen vao
    res.render('about', { title: 'About Us', message: 'Learn more about our company.'});
});

//dinh nghia tuyen duong cho trang san pham
app.get('/product', (req, res) => {
    res.render('products', { products });
});

//Middleware xu li loi 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found' });
});

//xu li loi 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', { title: '500 Internal Server Error' });
});

//chay server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});