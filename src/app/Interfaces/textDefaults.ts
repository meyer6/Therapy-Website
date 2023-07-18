import { buttonTemplate, textTemplate } from "./content"
import { fonts } from "./fonts"
import { colours } from './colours';

export const heading1: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font1,
    fontColour: colours.font1,
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 'normal'
}

export const heading2: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font1,
    fontColour: colours.font1,
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 'normal'
}

export const heading3: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font1,
    fontColour: colours.font2,
    fontSize: 30,
    fontWeight: 'normal',
    lineHeight: 'normal'
}

export const normalText: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font2,
    fontColour: colours.font3,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 27
}

export const thinText: textTemplate = {
    type: 'text',
    content: '',
    fontFamily: fonts.font3,
    fontColour: colours.font2,
    fontSize: 25,
    fontWeight: 'thin',
    lineHeight: 'normal'
}

export const button: buttonTemplate = {
    type: 'button',
    content: '',
    fontFamily: fonts.font3,
    colour: colours.font2,
    redirectURL: ''
}