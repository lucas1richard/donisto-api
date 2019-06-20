import ContactOrgFollowsKeys from './ContactOrgFollowsKeys';
import SeqModel from 'config/database/types/ModelInterface';
interface ContactOrgFollowsAttributes extends SeqModel {
    [ContactOrgFollowsKeys.UUID]?: string;
    [ContactOrgFollowsKeys.REJECTED]?: boolean;
}
export default ContactOrgFollowsAttributes;
