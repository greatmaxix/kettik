export default function ContactUs() {
    return (
        <div className="indexPager bg-light" id="contactUs">
            <div className="container mt-5">
                <form className="row">
                    <div className="col-12">
                        <h1 className="display-1">Свяжитесь с нами</h1>
                        <p className="lead">Мы всегда рады общению с вами</p>
                    </div>
                    <div className="col-12 col-md-6 m-auto">
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input type="text" className="form-control" id="name" placeholder="Введите имя"/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Введите email"/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="subject">Тема</label>
                            <input type="text" className="form-control" id="subject" placeholder="Введите тему"/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="message">Сообщение</label>
                            <textarea className="form-control" id="message" rows={3} placeholder="Введите сообщение"/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Отправить</button>
                    </div>
                </form>
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-1">Контакты</h1>
                        <p className="lead">Мы всегда рады общению с вами</p>
                    </div>
                    <div className="col-12 col-md-6 m-auto">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Контактная информация</h5>
                                <p className="card-text">
                                    Телефон: <a href="tel:+77072850862">+7 (707) 285-08-62</a>
                                </p>
                                <p className="card-text">
                                    <a href="mailto:greatmaxix@gmail.com">
                                        Написать письмо
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}