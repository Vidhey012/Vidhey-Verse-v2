
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
// import AudioPlayer from './components/AudioPlayer';
import SwalPopup from './components/SwalPopup';
import ScrollToTopButton from './ScrollToTop/ScrollToTopButton';
import NeonScrollIndicator from './components/helper/NeonScrollIndicator';
import Particles from './components/helper/particles';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '𝐕𝐢𝐝𝐡𝐞𝐲 𝐁𝐡𝐨𝐠𝐚𝐝𝐢',
  description: 'This is the portfolio of Vidhey Bhogadi. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="title_logo.ico"/>
      </head>
      <body className={inter.className}>
        <div className="fixed inset-0 -z-0">
            <Particles
              particleColors={['#7849f8', '#7849f8']}
              particleCount={9000}
              particleSpread={50}
              speed={0.08}
              particleBaseSize={300}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
            />
        </div>
        <NeonScrollIndicator/>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          <SwalPopup />
          {children}
        </main>
        <Footer />
        {/* <AudioPlayer /> */}
        <ScrollToTopButton />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
