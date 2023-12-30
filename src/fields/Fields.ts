import { QuoteBlock } from "../blocks/QuoteBlock"

export const DefaultCheckboxProps = {
    label: 'Click me to see fanciness',
    defaultValue: false,
}

export const DefaultBlocksProps = {
    minRows: 1,
    maxRows: 20,
    blocks: [
        // required
        QuoteBlock,
    ],
}

export const DefaultCodeProps = {
    required: true,
    admin: {
        language: 'javascript',
    },
}

export const DefaultRelationProps = {
    relationTo: 'users'
}

