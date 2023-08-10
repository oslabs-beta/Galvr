import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Galvr',
  description: 'Metrics and Traces Monitoring Tool for Kubernetes',
};

// Overall layout for the app.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

// export default function RootLayout({children}:
//   {children: React.ReactNode;}): JSX.Element {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}
//       <div>
//         <div>
//           <main className = "app">
//             <Nav />
//           </main>
//         </div>
//       </div>
//       </body>
//     </html>
//   );
// }
// import '@styles/globals.css';

// import Nav from '@/components/Nav.tsx';
// import Provider from '@/components/Provider';

// export const metadata = {
//   title: 'Promptopia',
//   description: 'Discover & Share AI Prompts',
// };

// const RootLayout = ({ children }) => (
//   <html lang="en">
//     <body>
//       <Provider>
//         <div className="main">
//           <div className="gradient" />
//         </div>

//         <main className="app">
//           <Nav />
//           {children}
//         </main>
//       </Provider>
//     </body>
//   </html>
// );

// export default RootLayout;
