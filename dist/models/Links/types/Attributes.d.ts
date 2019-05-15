import LinksKeys from './LinksKeys';
import SeqModel from 'config/database/types/ModelInterface';
interface LinksAttributes extends SeqModel {
    [LinksKeys.UUID]?: string;
    [LinksKeys.LABEL]?: string;
    [LinksKeys.IMAGE]?: string;
    [LinksKeys.DESCRIPTION]?: string;
    [LinksKeys.HREF]?: string;
}
export default LinksAttributes;
