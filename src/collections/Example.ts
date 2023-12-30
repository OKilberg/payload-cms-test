import { CollectionConfig } from 'payload/types'
import { DefaultBlocksProps, DefaultCheckboxProps, DefaultCodeProps, DefaultRelationProps } from '../fields/Fields'
import { canReadPage } from '../access/CollectionAccess'

const Example: CollectionConfig = {
    slug: 'example',
    auth: false,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        //create: ,
        read: canReadPage,
        //update: ,
        //delete: ,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: 'enableCoolStuff', // required
            type: 'checkbox', // required
            ...DefaultCheckboxProps
        },       
        {
            name: 'layout', // required
            type: 'blocks', // required
            ...DefaultBlocksProps
        },
        {
            name: 'trackingCode', // required
            type: 'code', // required
            ...DefaultCodeProps
        },
        {
            name:'topuser',
            type:'relationship',
            ...DefaultRelationProps
        },
    ],
    labels: {
        plural: 'Examples',
        singular: 'Example'
    },
    hooks: {

    },
    upload: {

    }

}

export default Example