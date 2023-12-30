import { CollectionConfig } from 'payload/types'
import { DefaultBlocksProps, DefaultCheckboxProps, DefaultCodeProps, DefaultRelationProps } from '../fields/Fields'
import { canReadPage } from '../access/CollectionAccess'

const Pages: CollectionConfig = {
    slug: 'pages',
    auth: false,
    admin: {
        useAsTitle: 'title',
    },
    access: {
        //create: ,
        //read: canReadPage,
        //update: ,
        //delete: ,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: 'title',
            type: 'text'
        }
    ],
    labels: {
        plural: 'Pages',
        singular: 'Page'
    },
    upload: {

    }

}

export default Pages