import { ThemeProvider } from 'next-themes';
import { Layout } from 'components/layout';
import { Toaster } from 'react-hot-toast';
import { type PropsWithChildren } from 'react';
import '@/styles/globals.css';
import AuthProvider from './auth/provider';

const MyApp = ({ children }: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Layout>
              {children}
              <Toaster />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default MyApp;
