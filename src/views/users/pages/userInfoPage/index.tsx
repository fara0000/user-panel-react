import React, {
    FC,
    memo,
    useEffect,
} from 'react';
import {
    Wrapper,
    IconWrapper,
    TitleContainer,
    HeaderContainer,
    PostButtonContainer,
} from './styledComponent';
import CustomMainHeader from '../../../../components/customMainHeader';
import * as userPageActions from '../../../../managers/usersPageManager/actions';
import * as userPageSelectors from '../../../../managers/usersPageManager/selectors';
import UserInfoCustomTable from './components/userInfoPageTable';
import {
    useDispatch,
    useSelector,
    shallowEqual,
} from 'react-redux';
import DeleteModal from '../../../../components/modals/deleteModal';
import FolderIcon from '../../../../assets/svg/folderIcon/FolderIcon';

export const UserInfoPage: FC = () => {
    const dispatch = useDispatch();
    const userPageTitle = 'User Info Table';
    const isOpen = useSelector(userPageSelectors.getIsDeleteModalOpen, shallowEqual);

    useEffect(() => {
        dispatch(userPageActions.getUserList());
    }, []);

    const redirectToPostPage = (): void => {
        dispatch(userPageActions.RedirectToPostPage());
    }

    // const toggleDeleteModal = (): void => {
    //     dispatch(userPageActions.isDeleteModalOpen());
    // };

    return (
        <Wrapper
            data-at={'user-info-page'}
        >
            <HeaderContainer
                data-at={'user-info-page__header-container'}
            >
                <CustomMainHeader
                    title={userPageTitle}
                    data-at={'user-info-page__header-container__main-header'}
                />
                <PostButtonContainer
                    onClick={redirectToPostPage}
                >
                    <IconWrapper>
                        <FolderIcon />
                    </IconWrapper>
                    <TitleContainer>
                        <TitleContainer.title>
                            {'Archive'}
                        </TitleContainer.title>
                    </TitleContainer>
                </PostButtonContainer>
            </HeaderContainer>
            <UserInfoCustomTable
                data-at={'user-info-page__body'}
            />
            <DeleteModal
                title={'delete user'}
                isOpen={isOpen}
                heading={'be careful'}
            />
        </Wrapper>
    );
};

export default memo(UserInfoPage);
