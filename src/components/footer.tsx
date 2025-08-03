type footerProps = {
    name: string
}

export default function Footer({name}: footerProps) {
    const now = new Date();
    return <section className="footer">
        <footer>

            {
                `© ${now.getFullYear()} ${name}. All rights reserved.`
            }
        </footer>
    </section>

}
