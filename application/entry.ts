import api from './router'

const app = (app: any) => {
    app.use('/api', api);
}

export default app;