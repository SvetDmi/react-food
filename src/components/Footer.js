function Footer() {
    return (
        <footer className="page-footer cyan">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">email@email.com</a>
                </div>
            </div>
        </footer>
    )

}
export { Footer };