type Route = { path: string; children?: Routes }
type Routes = Record<string, Route>

const routes = {
    AUTH: {
        path: '/auth',
    }
} satisfies Routes

routes.AUTH // 🤔
