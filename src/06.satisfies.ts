type Route = { path: string; children?: Routes }
type Routes = Record<string, Route>

const routes: Routes = {
    AUTH: {
        path: '/auth'
    }
}

routes.AUTH // 🤔
