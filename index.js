import 'babel-polyfill';
import Koa from 'koa';

var app = new Koa();

app.use(async(ctx) => {
    ctx.body = 'Marreta: CHEIRAAAA MEUS OVU';
});

app.listen(3000);
