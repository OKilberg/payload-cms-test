import { CollectionConfig } from 'payload/types'
import { canReadPage } from '../access/CollectionAccess'

const Content: CollectionConfig = {
    slug: 'content',
    auth: false,
    access: {
        //create: ,
        //read: canReadPage,
        read: ()=>true
        //update: ,
        //delete: ,
    },
    admin: {
        useAsTitle: 'contentName'
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'contentName',
                    type: 'text',
                    required: true
                },
                {
                    name: 'contentLibrary', 
                    type: 'text',
                    admin: {
                        description: 'Playlist, Album, Series etc.'
                    }
                },
                {
                    name: 'releaseDate', 
                    type: 'date',
                },
            ]
        },
        {
            name: 'contentArtwork', 
            type: 'upload',
            relationTo: 'artwork'
        },
        {
            name: 'contentDescription', 
            type: 'richText',
        },
        {
            name: 'contentSource', 
            type: 'text',
            admin: {
                description: 'Content link (youtube etc.)'
            }
        },

    ],
    labels: {
        plural: 'Content',
        singular: 'Content'
    },
}

export default Content