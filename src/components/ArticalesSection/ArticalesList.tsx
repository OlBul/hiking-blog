import './ArticalesList.scss'
import ArticalesItem from './ArticalesItem'
import articalesArray from './articalesArray'
import articalesBack from '../../assets/image/articalesBack.jpg'

import { Link } from 'react-router-dom'

type Props = {}
type PropsItem = {
    id: number
    img: string
    title: string
    text: string
}

const ArticalesList = (props: Props) => {
    return (
        <>
            <section className="articales">
                <div className="container articales__container">
                    <div className="articales__title">LET´S go</div>
                    <div className="articales__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lacinia odio vitae vestibulum vestibulum
                    </div>
                    <div className="articales__list">
                        {articalesArray.map(
                            ({ id, img, title, text }: PropsItem) => (
                                <a
                                    href="#articale_1"
                                    className="articales__item"
                                    key={id}
                                >
                                    <ArticalesItem
                                        id={id}
                                        img={img}
                                        title={title}
                                        text={text}
                                    />
                                </a>
                            )
                        )}
                    </div>

                    <Link to="/ourStories" className="articales__button button">
                        Show more
                    </Link>
                </div>
                <div className="articales__decore">
                    <img src={articalesBack} alt="leaves" />
                </div>
            </section>
        </>
    )
}

export default ArticalesList
