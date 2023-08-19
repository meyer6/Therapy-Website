import { buttonTemplate, textTemplate } from "../Interfaces/contentTemplates"
import { socialUrlsTemplate } from "../Interfaces/socialUrls"
import { heading2, normalText } from "./textDefaults"

export const logoUrl: string = "assets/Logo.png"

export const email: string = 'wellbeingcoaching_luisa@outlook.com'
export const socialUrls: socialUrlsTemplate = {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.instagram.com/'
}

export const popupData: Array<textTemplate | buttonTemplate> = [
    {...heading2, ...{fontSize: 30, content: 'Newsletter'}},
    {...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness'}},
]