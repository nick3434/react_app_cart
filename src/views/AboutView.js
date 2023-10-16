import Layout from "../components/Layout"

const AboutView = () => {
    return (
        <Layout
            title="關於本站"
            description="這是一個關於本站的簡介"
        >
            <section className="py-5">
                <div className="container">
                    <h2>About view content</h2>
                </div>
            </section>
        </Layout>
    )
}

export default AboutView