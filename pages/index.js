import Head from 'next/head'
import { event } from '../lib/googleAnalytics'
import styles from '../styles/Home.module.css'

export default function Home() {
    const logLinkClick = (url) => {
        event({
            action: 'clicked-link-to-external-site',
            params: {
                site: url,
            },
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>White Male.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>whitemale.dev</h1>

                <p className={styles.description}>
                    Because being{' '}
                    <code className={styles.code}>
                        {'{ gender: "male", ethnicity: "white" }'}
                    </code>{' '}
                    in tech is <em>far too difficult...</em>
                </p>

                <div className={styles.grid}>
                    <a
                        href="https://www.blackgirlscode.com/"
                        target="_blank"
                        className={styles.card}
                        onClick={() => logLinkClick('www.blackgirlscode.com')}
                    >
                        <h3>Black Girls Code &rarr;</h3>
                        <p>
                            Providing technology education for African-American
                            girls
                        </p>
                    </a>

                    <a
                        href="https://www.womenwhocode.com/"
                        target="_blank"
                        className={styles.card}
                        onClick={() => logLinkClick('www.womenwhocode.com')}
                    >
                        <h3>Women Who Code &rarr;</h3>
                        <p>
                            Non-profit dedicated to inspiring women to excel in
                            technology careers
                        </p>
                    </a>

                    <a
                        href="https://www.blacksintechnology.net/"
                        target="_blank"
                        className={styles.card}
                        onClick={() =>
                            logLinkClick('www.blacksintechnology.net')
                        }
                    >
                        <h3>Blacks In Technology &rarr;</h3>
                        <p>
                            Establishing standards for world class technical
                            excellence
                        </p>
                    </a>

                    <a
                        href="https://www.outintech.com/"
                        target="_blank"
                        className={styles.card}
                        onClick={() => logLinkClick('www.outintech.com')}
                    >
                        <h3>Out In Tech &rarr;</h3>
                        <p>
                            World’s largest non-profit community of LGBTQ+ tech
                            leaders
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    )
}
