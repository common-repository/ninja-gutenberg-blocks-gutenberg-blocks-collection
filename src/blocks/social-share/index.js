import edit from './components/edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import './style.scss';
import './editor.scss';

registerBlockType( 'ninja-blocks/social-sharing', {
    title: __('NB Social Sharing'),
    icon: 'share',
    category: 'ninja-blocks',
    keywords: [
        __('social'),
        __('sharing'),
        __('ninja-blocks'),
    ],
    edit,
    save() {
        // Rendering in PHP
        return null;
    },

});