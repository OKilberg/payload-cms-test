import { CollectionConfig } from 'payload/types'
import { DefaultBlocksProps, DefaultCheckboxProps, DefaultCodeProps, DefaultRelationProps } from '../fields/Fields'
import { canReadPage } from '../access/CollectionAccess'

const Artwork: CollectionConfig = {
    slug: 'artwork',
    auth: false,
    access: {
        //create: ,
        //read: canReadPage,
        read: ()=>true
        //update: ,
        //delete: ,
    },
    admin:{
        useAsTitle: 'name'
    },
    upload: true,   
    fields: [
        {
            name: 'name',
            type: 'text',
            //required: true
          },
        {
            name: 'alt',
            type: 'text',
            required: true
          },
    ],
    labels: {
        plural: 'Artwork',
        singular: 'Artwork'
    },
    

}

export default Artwork