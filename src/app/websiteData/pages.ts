import { blogTemplate } from "../Interfaces/blogs";
import { imageAndTextModule } from "../Interfaces/moduleTemplates";
import { pageTemplate } from "../Interfaces/pageTemplate";
import { button, heading1, heading2, heading3, normalText, thinText } from "./textDefaults";
import { blogPages, blogs } from "./blogs";
import { colours } from "./colours";

// module1a module1b module2a module2b module3a module3b module3c module3d carousel imageModule
const homePage: pageTemplate =     {
    url: '',
    modules: [
        {
            type: 'landingModule',
            backgroundImg: 'assets/homePage/landingPage.jpg',
            content: [
                {...heading2, ...{content: 'Luisa Picciuto', fontSize: 'max(50px, min(8vw, 130px))', fontColour: 'rgb(237, 232, 229)', fontFamily: 'Maharlika', lineHeight:'min(10vw, min(11vh, 130px))'}},
                {...thinText, ...{content: 'Coaching', fontSize: 'max(35px, min(6vw, 80px))', fontColour: 'rgb(237, 232, 229)'}, fontFamily: 'Maharlika', lineHeight:'min(10vw, min(11vh, 130px))'}
            ]
        },
        {
            type: 'module3a',
            backgroundColour: colours.background1,
            content1: [
                {...heading2, ...{content: 'We can help you find the answers to your questions.'}},
            ],
            content2:[
                {...heading3, ...{content: 'What is therapy?'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'Read More', redirectURL: 'AboutMe'}},
            ],
            content3:[
                {...heading3, ...{content: 'Why you may need a therapist?'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'Read More', redirectURL: 'AboutMe'}},
            ]
        }, 
        {
            type: 'module1b',
            backgroundColour: colours.background2,
            imgURL: 'assets/homePage/woman-in-white-looking-up.jpg',
            content: [
                {...heading2, ...{content: 'Hello!'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b> '}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ]
        },
        {
            type: 'module3c',
            backgroundColour: colours.background1,
            content1: [
                {...heading3, ...{content: 'Why choose me as a therapist?'}},
                {...normalText, ...{content: 'Finding the right therapist is a significant step towards your journey of healing, growth, and personal transformation. I understand that this decision is not taken lightly, and I am here to assure you that you are in safe and capable hands.'}},
                {...normalText, ...{content: '<b>1. Professional Expertise:</b> <br> With [X] years of experience in the field of therapy, I bring a wealth of knowledge and expertise to our sessions. My academic background, continuous training, and commitment to staying updated with the latest therapeutic approaches ensure that you receive the highest quality care.'}},
                {...normalText, ...{content: '<b>2. Empathetic and Non-Judgmental Space:</b> <br>Creating a safe, empathetic, and non-judgmental environment is at the core of my practice. I value your unique experiences, perspectives, and emotions. You can openly express yourself without fear of criticism, and together, we will work towards your well-being.'}},
                {...normalText, ...{content: '<b>3. Tailored Approach: </b> <br> I understand that each individuals journey is unique. My therapeutic approach is not one-size-fits-all. I take the time to understand your specific needs, goals, and challenges, allowing us to collaboratively develop a personalized treatment plan that resonates with you.'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ],
            content2:[],
            content3:[]
        },
        {
            type: 'module1a',
            backgroundColour: colours.background2,
            imgURL: 'assets/homePage/Img1.jpg',
            content: [
                {...heading2, ...{content: 'Hello!'}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
            ]
        },
        {
            type: 'imageModule',
            backgroundColour: colours.background2,
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmieZ-kKu6KOGfR2b0gZPEEtPEVuu-pvV4ZQ&usqp=CAU',
            content: [
                {...normalText, ...{content: '<b>Diploma with the Animas Centre</b>', 'fontColour': 'white', 'fontSize': 20}},
                {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel!', 'fontColour': 'white'}},
                {...button, ...{content: 'button', redirectURL: 'About-Me', 'centre': true, 'filled': true}},
            ]
        },
    ]
}

export const site: Array<pageTemplate> = [  
    homePage,
    {...homePage, url: 'Home'},
    {
        url: 'About-Me',
        modules: [
            {
                type: 'module1b',
                backgroundColour: colours.background2,
                imgURL: 'assets/homePage/woman-in-white-looking-up.jpg',
                content: [
                    {...heading3, ...{content: 'So who am I...'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...normalText, ...{content: 'Welcome to my therapist website. Im delighted to introduce myself and offer you a glimpse into the person behind the therapist. Heres a little about who I am and why Im passionate about helping you on your journey towards healing and self-discovery.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ]
            },
            {
                type: 'module3c',
                backgroundColour: colours.background1,
                content1: [
                    {...heading3, ...{content: 'What is my mission'}},
                    {...normalText, ...{content: 'Making professional therapy accessible, affordable, and convenient â€” so anyone who struggles with lifes challenges can get help, anytime and anywhere.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                content2:[],
                content3:[]
            },
            {
                type: 'module1a',
                backgroundColour: colours.background2,
                imgURL: 'assets/homePage/Img1.jpg',
                content: [
                    {...heading3, ...{content: 'My Professional Background'}},
                    {...normalText, ...{content: '1. <b>Education and Credentials: </b> </br> I hold a [Degree] in [Field] from [University Name], a foundation that has empowered me to understand the intricacies of human psychology and behavior. Additionally, I am a licensed Louisa, registered with [Licensing Body], which underscores my commitment to upholding the highest standards of ethical and professional practice. '}},
                    {...normalText, ...{content: '2. <b>Years of Dedicated Practice: </b> </br> With over [X] years of experience in the field of therapy, my journey has been one of continuous learning, growth, and connection with countless individuals seeking healing and personal transformation. Every client interaction has enriched my understanding of the human experience and deepened my empathy for those navigating lifes challenges.'}},
                    {...normalText, ...{content: '3. <b>Areas of Specialization: </b> </br>Throughout my career, Ive developed a strong foundation in [Specific Modalities or Areas of Expertise]. These specialties allow me to provide targeted and effective support to clients facing issues such as [Examples of Issues, e.g., anxiety, depression, trauma, relationships]. My commitment to remaining current in the field ensures that my clients benefit from the latest evidence-based practices.'}}
                ]
            },
            {
                type: 'module3d',
                backgroundColour: colours.background1,
                content1: [                
                    {...heading2, ...{content: 'Does this resonate?'}},
                    {...heading3, ...{content: '"You are here reading this which shows me that you want things to change and that is the first step.'}},
                    {...button, ...{content: 'Apply to work with me', redirectURL: 'Contact', 'centre': true}},
                ],
                content2:[],
                content3:[]
            }, 
            {
                type: 'carousel',
                backgroundColour: colours.background2,
                modules: [
                    {
                        type: 'module3a',
                        backgroundColour: 'inherit',
                        content1: [],
                        content2:[                
                            {...heading3, ...{content: 'Meyer Louka'}, lineHeight: 0},
                            {...normalText, ...{content: '"I cant express how grateful I am to have found Louisa. From the moment I walked into their office, I felt a sense of comfort and understanding. Their compassionate nature and deep insight made me feel truly heard and supported. With their guidance, Ive been able to overcome obstacles that once seemed insurmountable. Every session feels like a step forward, and I credit Louisa for helping me rediscover my strength and resilience."'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content3:[
                            {...normalText, ...{content: '"Ive had the privilege of working with Louisa for several months now, and the impact on my life has been incredible. Their ability to create a safe space for self-exploration and growth is unmatched. Louisa listens with empathy and offers thoughtful insights that have given me a fresh perspective on my challenges. With their support, Ive gained valuable tools to manage anxiety and improve my overall well-being. I highly recommend Louisa to anyone seeking a skilled and compassionate therapist." - <b> Jason M. <b>'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ]
                    }, 
                    {
                        type: 'module3a',
                        backgroundColour: 'inherit',
                        content1: [
                        ],
                        content2:[                
                            {...heading3, ...{content: 'Meyer Louka'}, lineHeight: 0},
                            {...normalText, ...{content: '"I cant express how grateful I am to have found Louisa. From the moment I walked into their office, I felt a sense of comfort and understanding. Their compassionate nature and deep insight made me feel truly heard and supported. With their guidance, Ive been able to overcome obstacles that once seemed insurmountable. Every session feels like a step forward, and I credit Louisa for helping me rediscover my strength and resilience."'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content3:[
                            {...normalText, ...{content: '"Ive had the privilege of working with Louisa for several months now, and the impact on my life has been incredible. Their ability to create a safe space for self-exploration and growth is unmatched. Louisa listens with empathy and offers thoughtful insights that have given me a fresh perspective on my challenges. With their support, Ive gained valuable tools to manage anxiety and improve my overall well-being. I highly recommend Louisa to anyone seeking a skilled and compassionate therapist." - <b> Jason M. <b>'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ]
                    }, 
                    {
                        type: 'module3c',
                        backgroundColour: 'inherit',
                        content1: [
                            {...heading3, ...{content: 'Nishant Moolinti'}},
                            {...normalText, ...{content: '"I cant thank  Louisa enough for the profound impact theyve had on my life. From the beginning, they took the time to understand my concerns and tailor our sessions to my unique needs. Their gentle guidance and genuine empathy have allowed me to confront deep-rooted issues and make significant progress. Louisa has a gift for helping you see your own potential and guiding you towards self-discovery. Im so grateful to have them as my therapist."'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content2:[],
                        content3:[]
                    },
                    {
                        type: 'module3c',
                        backgroundColour: 'inherit',
                        content1: [
                            {...normalText, ...{content: '"I cant thank Louisa enough for the profound impact theyve had on my life. From the beginning, they took the time to understand my concerns and tailor our sessions to my unique needs. Their gentle guidance and genuine empathy have allowed me to confront deep-rooted issues and make significant progress. Louisa has a gift for helping you see your own potential and guiding you towards self-discovery. Im so grateful to have them as my therapist." <b> - Meyer. L '}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content2:[],
                        content3:[]
                    },
                ]
            },
        ]
    },
    {
        url: 'Work-With-Me',
        modules: [
            {
                type: 'module1b',
                imgURL: 'assets/homePage/woman-sitting-on-sofa.jpg',
                backgroundColour: colours.background2,
                content: [
                    {...heading3, ...{content: 'When am I open'}},
                    {...normalText, ...{content: 'Monday:  <b> 10am - 4pm <b> '}},
                    {...normalText, ...{content: 'Tuesday:  <b> 10am - 4pm <b>'}},
                    {...normalText, ...{content: 'Wednesday:  <b> 10am - 4pm <b>'}},
                    {...normalText, ...{content: 'Thursday:  <b> 10am - 4pm <b>'}},
                    {...normalText, ...{content: 'Friday:  <b> 10am - 4pm <b>'}},
                ]
             
            },
            {
                type: 'module3a',
                backgroundColour: colours.background1,
                content1: [],
                content2:[                
                    {...heading3, ...{content: '1:1 coaching'}, lineHeight: 0},
                    {...normalText, ...{content: 'I work 1:1 with clients to create a bespoke environment that works just for you, enabling you to move past barriers, gain clarity, confidence, take action, and make changes. I use questioning, listening, observation, reflection, and other skills to enable you to access your own knowledge, experience, and potential and get the results you want. I share tools, techniques, resources, and reading suggestions tailored to your needs. Clients work with me for many different reasons, yet whatever their motivation for coming to coaching, my clients consistently feel empowered to believe in themselves by uncovering their strengths to step forwards with confidence.I specialise in ADHD coaching, championing the ADHD experience, and challenging outdated stereotypes. I support individuals with ADHD to understand and celebrate themselves so they can flourish in all areas of their life. Using my Executive Function Coach training, I can help you to understand your ADHD brain better and discover and maximise your strengths. I will collaborate with you to find the best way for you and your unique brain to flourish.'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                content3:[
              
                    {...heading3, ...{content: 'Neurodiversity Training'}, lineHeight: 0},
                    {...normalText, ...{content: 'Welcome to the realm of neurodiversity, a concept that celebrates the natural variation in human cognitive and neurological functioning. Embracing neurodiversity means acknowledging that differences in conditions like autism, ADHD, and dyslexia are simply part of the rich tapestry of human experiences.'}},
                    {...normalText, ...{content: 'Neurodiversity challenges the notion of a single "normal" and highlights the strengths, talents, and unique viewpoints that neurodiverse individuals offer. This movement shifts our focus from deficits to potentials, creating a more inclusive society where everyones contributions are valued.'}},
                    {...normalText, ...{content: 'Neurodiverse individuals possess a diverse range of strengths, from creativity and attention to detail to empathy and problem-solving. By creating environments that embrace these strengths, we empower everyone to thrive, regardless of their neurocognitive profiles.'}},
                    {...normalText, ...{content: 'Advocacy, education, and dispelling misconceptions are vital components of the neurodiversity movement. By spreading understanding and empathy, we foster a more accurate and positive perception of neurodiverse individuals.'}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                content1: [],
                content2:[                
                    {...heading3, ...{content: 'I\'m Elyssa, a qualified Mindset Coach & certified Hypnotherapist'}},
                    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
                    {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                ],
                content3:[
                    {
                        type: 'iframe', 
                        src: 'https://www.youtube.com/embed/PhDfNC-DvpA',
                        width: '80%',
                        aspectRatio: '16/9'
                    }
                ]
            }, 
            

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
                    {...normalText, ...{content: '<i>"Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness"</i>'}},
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
                    {...normalText, ...{content: '"Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and itâ€™s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness"'}},
                ],
                content2:[],
                content3: []
            },
            {
                type: 'carousel',
                backgroundColour: colours.background1,
                modules: [
                    {
                        type: 'module3a',
                        backgroundColour: 'inherit',
                        content1: [],
                        content2:[                
                            {...heading3, ...{content: 'Meyer Louka'}, lineHeight: 0},
                            {...normalText, ...{content: '"I cant express how grateful I am to have found Louisa. From the moment I walked into their office, I felt a sense of comfort and understanding. Their compassionate nature and deep insight made me feel truly heard and supported. With their guidance, Ive been able to overcome obstacles that once seemed insurmountable. Every session feels like a step forward, and I credit Louisa for helping me rediscover my strength and resilience."'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content3:[
                            {...normalText, ...{content: '"Ive had the privilege of working with Louisa for several months now, and the impact on my life has been incredible. Their ability to create a safe space for self-exploration and growth is unmatched. Louisa listens with empathy and offers thoughtful insights that have given me a fresh perspective on my challenges. With their support, Ive gained valuable tools to manage anxiety and improve my overall well-being. I highly recommend Louisa to anyone seeking a skilled and compassionate therapist." - <b> Jason M. <b>'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ]
                    }, 
                    {
                        type: 'module3a',
                        backgroundColour: 'inherit',
                        content1: [
                        ],
                        content2:[                
                            {...heading3, ...{content: 'Meyer Louka'}, lineHeight: 0},
                            {...normalText, ...{content: '"I cant express how grateful I am to have found Louisa. From the moment I walked into their office, I felt a sense of comfort and understanding. Their compassionate nature and deep insight made me feel truly heard and supported. With their guidance, Ive been able to overcome obstacles that once seemed insurmountable. Every session feels like a step forward, and I credit Louisa for helping me rediscover my strength and resilience."'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content3:[
                            {...normalText, ...{content: '"Ive had the privilege of working with Louisa for several months now, and the impact on my life has been incredible. Their ability to create a safe space for self-exploration and growth is unmatched. Louisa listens with empathy and offers thoughtful insights that have given me a fresh perspective on my challenges. With their support, Ive gained valuable tools to manage anxiety and improve my overall well-being. I highly recommend Louisa to anyone seeking a skilled and compassionate therapist." - <b> Jason M. <b>'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ]
                    }, 
                    {
                        type: 'module3c',
                        backgroundColour: 'inherit',
                        content1: [
                            {...heading3, ...{content: 'Nishant Moolinti'}},
                            {...normalText, ...{content: '"I cant thank  Louisa enough for the profound impact theyve had on my life. From the beginning, they took the time to understand my concerns and tailor our sessions to my unique needs. Their gentle guidance and genuine empathy have allowed me to confront deep-rooted issues and make significant progress. Louisa has a gift for helping you see your own potential and guiding you towards self-discovery. Im so grateful to have them as my therapist."'}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content2:[],
                        content3:[]
                    },
                    {
                        type: 'module3c',
                        backgroundColour: 'inherit',
                        content1: [
                            {...normalText, ...{content: '"I cant thank Louisa enough for the profound impact theyve had on my life. From the beginning, they took the time to understand my concerns and tailor our sessions to my unique needs. Their gentle guidance and genuine empathy have allowed me to confront deep-rooted issues and make significant progress. Louisa has a gift for helping you see your own potential and guiding you towards self-discovery. Im so grateful to have them as my therapist." <b> - Meyer. L '}},
                            {...button, ...{content: 'button', redirectURL: 'AboutMe'}},
                        ],
                        content2:[],
                        content3:[]
                    },
                ]
            },
            {
                type: 'imageGrid',
                backgroundColour: colours.background2,
                images: [
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png',
                    'assets/testimonials/testimonial.png'
                ]
            },
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
                    // ... Change the following to change what the list of blog pages will look like
                    {...heading1, ...{fontSize: 25, content: blog.title}},
                    {...normalText, ...{fontWeight: 'bold', content: blog.date}},
                    {...normalText, ...{content: blog.description}},
                    {...button, ...{content: 'Read More', redirectURL: 'Blog#' + i.toString()}},
                    // ...
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
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background1,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background1,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background2,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ]
            },
            {
                type: 'module3b',
                backgroundColour: colours.background1,
                content1:[],
                content2:[
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                    {...button, ...{content: 'Download', redirectURL: 'https://bit.ly/2LA8jnA '}},
                ],
                content3: [
                    {...heading3, ...{content: 'Book'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
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
                    {...heading3, ...{content: 'Contact Me'}},
                    {...normalText, ...{content: 'At the beginning of 2019, having just changed careers, I found myself in a job I didnâ€™t like, feeling so overwhelmed, confused and stuck.'}},
                ],
                content3: [{type: 'contact'}]
            }
        ]
    }
]

// Mailer lite
// Resources
// Comments
// Testing
// How to use document