import { blogTemplate } from "../Interfaces/blogs";
import { imageAndTextModule } from "../Interfaces/moduleTemplates";
import { pageTemplate } from "../Interfaces/pageTemplate";
import { button, heading1, heading2, heading3, normalText, thinText } from "./textDefaults";
import { blogPages, blogs } from "./blogs";
import { colours } from "./colours";

export const site: Array<pageTemplate> = [  
    {
        url: '',
        modules: [
            {
                type: 'landingModule',
                backgroundImg: 'assets/homePage/landingPage.jpg',
                content: [{...heading1, ...{content: 'Luisa Picciuto'}},
                    {...thinText, ...{content: 'COACHING'}}
                ]
            },
            {
                type: 'module3c',
                backgroundColour: colours.background1,
                content1: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                content2:[],
                content3:[]
            },
            {
                type: 'module1b',
                backgroundColour: colours.background2,
                imgURL: 'assets/homePage/Img1.jpg',
                content: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ]
            },
            {
                type: 'module1a',
                backgroundColour: colours.background1,
                imgURL: 'assets/homePage/Img1.jpg',
                content: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ]
            },
            {
                type: 'module3c',
                backgroundColour: colours.background2,
                content1: [
                    {...heading2, ...{content: 'You can achieve gra'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                content2:[],
                content3:[]
            },
            {
                type: 'imageModule',
                backgroundColour: colours.background1,
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmieZ-kKu6KOGfR2b0gZPEEtPEVuu-pvV4ZQ&usqp=CAU',
                content: [
                    {...normalText, ...{content: '<b>Diploma with the Animas Centre</b>', 'fontColour': 'white', 'fontSize': 20}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel!', 'fontColour': 'white'}},
                    {...button, ...{content: 'button', redirectURL: 'About-Me', 'centre': true, 'filled': true}},
                ]
            },
            {
                type: 'carousel',
                backgroundColour: colours.background2,
                modules: [
                    {
                        type: 'module2a',
                        backgroundColour: 'inherit',
                        imgURL: 'assets/homePage/Img1.jpg',
                        content: [
                            {...heading2, ...{content: 'Hello2!'}},
                            {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                        ]
                    },
                    {
                        type: 'module3a',
                        backgroundColour: 'inherit',
                        content1: [
                            {...heading2, ...{content: 'Hello!'}},
                        ],
                        content2:[                
                            {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content3:[
                            {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ]
                    },            
                    {
                        type: 'module3c',
                        backgroundColour: 'inherit',
                        content1: [
                            {...heading2, ...{content: 'Hello!'}},
                            {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                            {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content2:[],
                        content3:[]
                    },
                    {
                        type: 'module3c',
                        backgroundColour: 'inherit',
                        content1: [
                            {...heading2, ...{content: 'You can achieve gra'}},
                            {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                            {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content2:[],
                        content3:[]
                    },
                    {
                        type: 'imageModule',
                        backgroundColour: 'inherit',
                        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmieZ-kKu6KOGfR2b0gZPEEtPEVuu-pvV4ZQ&usqp=CAU',
                        content: [
                            {...normalText, ...{content: '<b>Diploma with the Animas Centre</b>', 'fontColour': 'white', 'fontSize': 20}},
                            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel!', 'fontColour': 'white'}},
                            {...button, ...{content: 'button', redirectURL: 'About-Me', 'centre': true, 'filled': true}},
                        ]
                    },
                ]
            },
        ]
    },
    {
        url: 'About-Me',
        modules: [
            {
                type: 'module1a',
                backgroundColour: colours.background2,
                imgURL: 'assets/homePage/Img1.jpg',
                content: [
                    {...heading1, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my adgohpu to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b> <br/>Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                ]
            },
            {
                type: 'module2a',
                backgroundColour: colours.background1,
                imgURL: 'assets/homePage/Img1.jpg',
                content: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                ]
            },
            {
                type: 'module3a',
                backgroundColour: colours.background2,
                content1: [
                    {...heading2, ...{content: 'Hello!'}},
                ],
                content2:[                
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                content3:[
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ]
            }
        ]
    },
    {
        url: 'Work-With-Me',
        modules: [
            {
                type: 'module3d',
                backgroundColour: colours.background1,
                content1: [
                    {...heading2, ...{content: 'Hello!'}},
                ],
                content2:[],
                content3: []
            }
        ]
    },
    {
        url: 'Testimonials',
        modules: [
            {
                type: 'module3d',
                backgroundColour: colours.background2,
                content1: [
                    {...heading2, ...{content: '<i><u>"Loving and Caring</i>"</u>'}},
                    {...normalText, ...{content: '<b>Maria Melissa</b>'}},
                    {...normalText, ...{content: '<i>"Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness"</i>'}},
                ],
                content2:[],
                content3: []
            },
            {
                type: 'imageGrid',
                backgroundColour: colours.background1,
                images: [
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png'
                ]
            },
            {
                type: 'module3d',
                backgroundColour: colours.background2,
                content1: [
                    {...heading2, ...{content: '"Loving and Caring"'}},
                    {...normalText, ...{content: '<b>Maria Melissa</b>'}},
                    {...normalText, ...{content: '"Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness"'}},
                ],
                content2:[],
                content3: []
            }
        ]
    },
    {
        url: 'Blog',
        modules: blogs.map((blog: blogTemplate, i: number) : imageAndTextModule => {
            return {
                type: i % 2 == 0 ? 'module2a' : 'module2b',
                backgroundColour: i % 2 == 0? colours.background2 : colours.background1,
                imgURL: blog.imgURL,
                content: [
                    {...heading1, ...{fontSize: 25, content: blog.title}},
                    {...normalText, ...{fontWeight: 'bold', content: blog.date}},
                    {...normalText, ...{content: blog.description}},
                    {...button, ...{content: 'Read More', redirectURL: 'Blog#' + i.toString()}},
                ]
            }
        })
    },
    ...blogPages,
    {
        url: 'Resources',
        modules: [
            {
                type: 'module3a',
                backgroundColour: colours.background2,
                content1:[{...heading2, ...{content: 'Resources'}}],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background1,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background1,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background1,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
        ]
    },
    {
        url: 'Contact',
        modules: [
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                ],
                content3: [{type: 'contact'}]
            }
        ]
    }
]