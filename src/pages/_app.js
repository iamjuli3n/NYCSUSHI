// pages/_app.js
import '../app/globals.css';

import { AuthProvider, useAuth } from "@/AuthContext"

function MyApp({ Component, pageProps }) {
       return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp
