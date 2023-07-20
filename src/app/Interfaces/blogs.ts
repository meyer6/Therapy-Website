import { pageTemplate } from './pageTemplate';
import { buttonTemplate, textTemplate } from "./contentTemplates";
import { heading1, heading2, heading3, normalText, thinText, button } from './textDefaults';

export interface blogTemplate {
    title: string;
    imgURL: string;
    date: string;
    description: string;
    content: Array<textTemplate | buttonTemplate>
}

export const blogs: Array<blogTemplate> = [
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...heading3, ...{content: 'Diploma with the Animas Centre for Coaching!'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
    {
        date: '23rd March 2023',
        imgURL: 'assets/Img1.jpg',
        title: '6 Common Pricing Mistakes & Free Workbook To Fix Them',
        description: 'oma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind',
        content: [
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
            {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fulfilled I feel! <br><br> Every client I have, every comment on social media I receive, every testimonial I read, my heart is so full with happiness, <b>seeing people achieve their dreams, feel happier and not let their mind limit them.</b>'}},
        ]
    },
]

export const blogPages: Array<pageTemplate> = blogs.map((blog: blogTemplate, i: number) : pageTemplate => {
    return {
        url: 'Blog%23' + i.toString(),
        modules: [            
            {
                type: 'module3c',
                backgroundColour: '#FFFFFF',
                content1: [
                    {...heading2, ...{content: blog.title}},
                    {...normalText, ...{fontWeight: 'bold', content: blog.date}},
                    ...blog.content
                ],
                content2: [],
                content3: []
            }
        ]
    }
})

// console.log(blogPages)