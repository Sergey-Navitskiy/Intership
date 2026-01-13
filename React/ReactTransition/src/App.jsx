import { AppProvider } from './components/AppContext'
import { Layout } from './components/Layout'

export default function App() {
  return (
    <AppProvider>
      <div>
        <h1>Приложение с Context</h1>
        <Layout />
      </div>
    </AppProvider>
  )
}
