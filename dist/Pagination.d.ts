import { Component } from 'react';
export interface PaginationEventOptions {
    currentPage: number;
    newPage: number;
}
interface Props {
    currentPage?: number;
    totalItems: number;
    itemsPerPage: number;
    useFirstLast: boolean;
    usePrevNext: boolean;
    onFirstClick(options: PaginationEventOptions): void;
    onPrevClick(options: PaginationEventOptions): void;
    onItemClick(options: PaginationEventOptions): void;
    onNextClick(options: PaginationEventOptions): void;
    onLastClick(options: PaginationEventOptions): void;
}
declare class Pagination extends Component<Props> {
    state: {
        activePage: number;
    };
    componentWillReceiveProps(props: Props): void;
    buildPaginationItems(numberOfPages: number): JSX.Element[];
    onFirstClick(): Promise<void>;
    onPrevClick(): Promise<void>;
    onNextClick(): Promise<void>;
    onLastClick(numberOfPages: number): Promise<void>;
    onItemClick(clickedItem: number): Promise<void>;
    render(): JSX.Element;
}
export default Pagination;
