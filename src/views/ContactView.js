import Layout from "../components/Layout"

const ContactView = () => {

    return (
        <Layout
            title="聯絡我們"
            description="這是一個聯絡本公司的資訊"
        >
            <section className="py-5">
                <div className="container">
                    <h2>Tel: +886-2-2345-6789</h2>
                </div>
            </section>
        </Layout>
    )
}

export default ContactView