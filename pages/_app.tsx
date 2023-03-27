import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ResultsNavigation from "../components/ResultsNavigation";
import ScrollToTop from "../components/ScrollToTop";

function SoloLive({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-slate-200 pb-20 min-h-screen">
            <div className="lg:w-1/2 mx-auto">
                <Head>
                    <title>NER SoloLive</title>
                    <link rel="icon" href="/ner150.png" />
                </Head>

                <ResultsNavigation activePage={pageProps.activePage} />

                <Component {...pageProps} />

                <ScrollToTop />
            </div>
        </div>
    );
}

export default SoloLive;
