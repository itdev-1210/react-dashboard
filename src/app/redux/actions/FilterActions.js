export const SHOW_FILTER_PANEL = "SHOW_FILTER_PANEL";

export const showFilterPanel = () => dispatch => {
    dispatch({
        type: SHOW_FILTER_PANEL,
    });
}
