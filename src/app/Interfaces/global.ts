import { colours } from './colours';
import { fonts } from './fonts';
import { socialUrlsTemplate } from './socialUrls';
import { heading1, heading2, heading3, normalText, thinText, button } from './textDefaults';
import { blogPages, blogTemplate, blogs } from './blogs';
import { pageTemplate } from './pageTemplate';
import { imageAndTextModule } from './moduleTemplates';

export const logoUrl: string = "assets/Logo.png"

export const email: string = 'meyerlouka6@gmail.com'
export const socialUrls: socialUrlsTemplate = {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.instagram.com/'
}

export const site: Array<pageTemplate> = [  
    {
        url: '',
        modules: [
            {
                type: 'landingModule',
                backgroundImg: 'assets/landingPage.jpg',
                text: [{...heading1, ...{content: 'Luisa Picciuto'}},
                    {...thinText, ...{content: 'COACHING'}}
                ]
            },
            {
                type: 'module3c',
                backgroundColour: colours.background1,
                text1: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                text2:[],
                text3:[]
            },
            {
                type: 'module1b',
                backgroundColour: colours.background2,
                imgURL: 'assets/Img1.jpg',
                text: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ]
            },
            {
                type: 'module1a',
                backgroundColour: colours.background1,
                imgURL: 'assets/Img1.jpg',
                text: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ]
            },
            {
                type: 'module3c',
                backgroundColour: colours.background2,
                text1: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                text2:[],
                text3:[]
            },
            // {
            //     type: 'imageModule',
            //     backgroundColour: colours.background1,
            //     imgURL: 'assets/Img1.jpg',
            //     text: [
            //         {...heading2, ...{content: 'Hello!'}},
            //         {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            //         {...button, ...{content: 'Contact Me', redirectURL: 'Contact'}},
            //     ]
            // }
        ]
    },
    {
        url: 'About-Me',
        modules: [
            {
                type: 'module1a',
                backgroundColour: colours.background2,
                imgURL: 'assets/Img1.jpg',
                text: [
                    {...heading1, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my adgohpu to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b> <br/>Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                ]
            },
            {
                type: 'module2a',
                backgroundColour: colours.background1,
                imgURL: 'assets/Img1.jpg',
                text: [
                    {...heading2, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                ]
            },
            {
                type: 'module3a',
                backgroundColour: colours.background2,
                text1: [
                    {...heading2, ...{content: 'Hello!'}},
                ],
                text2:[                
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                text3:[
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
                text1: [
                    {...heading2, ...{content: 'Hello!'}},
                ],
                text2:[],
                text3: []
            }
        ]
    },
    {
        url: 'Testimonials',
        modules: [
            {
                type: 'module3d',
                backgroundColour: colours.background2,
                text1: [
                    {...heading2, ...{content: '"Loving and Caring"'}},
                    {...normalText, ...{content: '<b>Maria Melissa</b>'}},
                    {...normalText, ...{content: '"Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness"'}},
                ],
                text2:[],
                text3: []
            },
            {
                type: 'imageGrid',
                backgroundColour: colours.background1,
                images: [
                    'assets/testimonial.png',
                    'assets/testimonial.png',
                    'assets/testimonial.png',
                    'assets/testimonial.png',
                    'assets/testimonial.png',
                    'assets/testimonial.png'
                ]
            },
            {
                type: 'module3d',
                backgroundColour: colours.background2,
                text1: [
                    {...heading2, ...{content: '"Loving and Caring"'}},
                    {...normalText, ...{content: '<b>Maria Melissa</b>'}},
                    {...normalText, ...{content: '"Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness"'}},
                ],
                text2:[],
                text3: []
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
                text: [
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
                type: 'module2a',
                backgroundColour: colours.background1,
                imgURL: 'assets/book.jpg',
                text: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness'}},
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
                text1:[],
                text2:[
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
                ],
                text3: [{type: 'contact'}]
            }
        ]
    }
]