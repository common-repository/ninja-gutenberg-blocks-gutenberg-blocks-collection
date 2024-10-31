import edit from './components/edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import './style.scss';
import './editor.scss';

registerBlockType( 'ninja-blocks/post-grid', {
    title: __('NB Post Grid'),
    icon: 'welcome-write-blog',
    category: 'ninja-blocks',
    keywords: [
        __('Post'),
        __('News'),
        __('ninja-blocks'),
    ],
    edit,
    save() {
        // Rendering in PHP
        return null;
    },
    
});