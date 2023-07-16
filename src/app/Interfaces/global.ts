import { colourTemplate } from './colours';
import { buttonTemplate, pageTemplate, textTemplate } from './content';
import { fontsTemplate } from './fonts';
import { socialUrlsTemplate } from './socialUrls';

export const colours: colourTemplate = {
    background1: "#e4ebeb", //"#F4EEE9"
    background2: "#FFFEFB",
    font1: "#2c5194", //375CA0 //A4381D
    font2: "#967253", //EB6E80 //EB6949
    font3: "#000000",
};

export const logoUrl: string = "assets/Logo.png"

// Note that the font must be linked in index.html
export const fonts: fontsTemplate = {
    font1: "Merriweather", //Playfair Display
    font2: "Montserrat",
    font3: "Raleway"
};

export const email: string = 'meyerlouka6@gmail.com'
export const socialUrls: socialUrlsTemplate = {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.instagram.com/'
}

const heading1: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font1,
    fontColour: colours.font1,
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 'normal'
}

const heading2: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font1,
    fontColour: colours.font1,
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 'normal'
}

const heading3: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font1,
    fontColour: colours.font2,
    fontSize: 30,
    fontWeight: 'normal',
    lineHeight: 'normal'
}

const normalText: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font2,
    fontColour: colours.font3,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 27
}

const thinText: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font3,
    fontColour: colours.font2,
    fontSize: 25,
    fontWeight: 'thin',
    lineHeight: 'normal'
}

const button: buttonTemplate = {
    type: 'button',
    content: '',
    fontFamily: fonts.font3,
    colour: colours.font2,
    redirectURL: ''
}

export const home: pageTemplate = {
    url: '',
    modules: [
        {
            type: 'landingModule',
            backgroundImg: 'https://images.squarespace-cdn.com/content/v1/5ed4e58c2bc5dc1defd26236/619dfb47-2b41-4dd5-a797-cda9eb213175/Elyssa-Desai-Coaching-Homepage.jpg',
            text: [{...heading1, ...{content: 'Elyssa Desai'}},
                {...thinText, ...{content: 'COACHING'}}
            ]
        },
        {
            type: 'module3a',
            backgroundColour: colours.background1,
            text1: [
                {...heading2, ...{content: 'Hello!'}},
            ],
            text2:[
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
                {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
            ],
            text3:[
                {...normalText, ...{content: 'I\'d always wanted a career helping people and hearing about someone who had a successful coaching business and was younger than me, was the proof point I needed that it might just be possible for me\.<br><br> Within a week I had signed up to a free coaching taster weekend. After years of knowing I wanted to help people but HR and recruitment not quite fulfilling me, I had FINALLY found what I was meant to do in life.'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}}
            ]
        },
        {
            type: 'module1a',
            backgroundColour: colours.background2,
            imgURL: 'assets/Img1.jpg',
            text: [
                {...heading1, ...{content: 'Hello!'}},
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ]
        },
        {
            type: 'module1b',
            backgroundColour: colours.background1,
            imgURL: 'assets/Img1.jpg',
            text: [
                {...heading1, ...{content: 'Hello!'}},
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            ]
        },
        {
            type: 'module2a',
            backgroundColour: colours.background2,
            imgURL: 'assets/Img1.jpg',
            text: [
                {...heading1, ...{content: 'Hello!'}},
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ]
        },
        {
            type: 'module2b',
            backgroundColour: colours.background1,
            imgURL: 'assets/Img1.jpg',
            text: [
                {...heading1, ...{content: 'Hello!'}},
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
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
            ],
            text3:[
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ]
        },
        {
            type: 'module3b',
            backgroundColour: colours.background1,
            text1: [],
            text2:[                
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            ],
            text3:[
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ]
        },
        {
            type: 'module3c',
            backgroundColour: colours.background2,
            text1:[
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            ],
            text2:[],
            text3: []
        },
        {
            type: 'module3d',
            backgroundColour: colours.background1,
            text1: [
                {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            ],
            text2:[],
            text3: []
        }
    ]
}

export const site: Array<pageTemplate> = [  
    // {
    //     url: '',
    //     modules: [
    //         {
    //             type: 'landingModule',
    //             backgroundImg: 'https://images.squarespace-cdn.com/content/v1/5ed4e58c2bc5dc1defd26236/619dfb47-2b41-4dd5-a797-cda9eb213175/Elyssa-Desai-Coaching-Homepage.jpg',
    //             text: [{...heading1, ...{content: 'Elyssa Desai'}},
    //                 {...thinText, ...{content: 'COACHING'}}
    //             ]
    //         },
    //         {
    //             type: 'module3c',
    //             backgroundColour: colours.background1,
    //             text1: [
    //                 {...heading2, ...{content: 'Hello!'}},
    //                 {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
    //                 {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
    //                 {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
    //             ],
    //             text2:[],
    //             text3:[]
    //         },
    //         {
    //             type: 'module1b',
    //             backgroundColour: colours.background2,
    //             imgURL: 'assets/Img1.jpg',
    //             text: [
    //                 {...heading2, ...{content: 'Hello!'}},
    //                 {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
    //                 {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
    //             ]
    //         },
    //         {
    //             type: 'module1a',
    //             backgroundColour: colours.background1,
    //             imgURL: 'assets/Img1.jpg',
    //             text: [
    //                 {...heading2, ...{content: 'Hello!'}},
    //                 {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
    //                 {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
    //             ]
    //         },
    //         {
    //             type: 'module3c',
    //             backgroundColour: colours.background2,
    //             text1: [
    //                 {...heading2, ...{content: 'Hello!'}},
    //                 {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.'}},
    //                 {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.'}},
    //                 {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
    //             ],
    //             text2:[],
    //             text3:[]
    //         },
    //     ]
    // },
    home,
    {
        url: 'AboutMe',
        modules: [
            {
                type: 'module1a',
                backgroundColour: colours.background2,
                imgURL: 'assets/Img1.jpg',
                text: [
                    {...heading1, ...{content: 'Hello!'}},
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
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
        url: 'Testimonials',
        modules: [
            {
                type: 'module3d',
                backgroundColour: colours.background1,
                text1:[{
                        type: 'text',
                        content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.',
                        fontFamily: fonts.font1,
                        fontColour: colours.font2,
                        fontSize: 30,
                        fontWeight: 'normal',
                        lineHeight: 'normal'
                    },{
                        type: 'text',
                        content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.',
                        fontFamily: fonts.font2,
                        fontColour: colours.font3,
                        fontSize: 16,
                        fontWeight: 'normal',
                        lineHeight: 27
                    },
                ],
                text2:[],
                text3: []
            }
        ]
    },
    {
        url: 'Contact',
        modules: [
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                text1:[],
                text2:[{
                        type: 'text',
                        content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist.',
                        fontFamily: fonts.font1,
                        fontColour: colours.font2,
                        fontSize: 30,
                        fontWeight: 'normal',
                        lineHeight: 'normal'
                    },{
                        type: 'text',
                        content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didn’t like, feeling so overwhelmed, confused and stuck.',
                        fontFamily: fonts.font2,
                        fontColour: colours.font3,
                        fontSize: 16,
                        fontWeight: 'normal',
                        lineHeight: 27
                },],
                text3: [{type: 'contact'}]
            }
        ]
    }
]