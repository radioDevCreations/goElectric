export const APP_CHANGE_PAGE = 'APP_CHANGE_PAGE';

const changePage = (pageID: number) => ({
    type: APP_CHANGE_PAGE,
    payload: {
        pageID,
    }
});