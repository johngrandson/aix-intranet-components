import { Component } from 'react';
import { Pagination as BSPagination, PaginationItem, PaginationLink } from 'reactstrap';
import * as React from 'react';

export interface PaginationEventOptions {
  currentPage: number;
  newPage: number;
}

interface Props {
  reset(): void;
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

class Pagination extends Component<Props> {
  state = {
    activePage: 1,
  };

  async reset() {
    await this.setState({
      activePage: 1,
    });
  }

  buildPaginationItems(numberOfPages: number) {
    const paginationItems = [];

    for (let i = 1; i <= numberOfPages; i++) {
      paginationItems.push(
        <PaginationItem key={`pagination-item-${i}`} active={this.state.activePage === i}>
          <PaginationLink onClick={this.onItemClick.bind(this, i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
  }

  async onFirstClick() {
    const pages: PaginationEventOptions = {
      currentPage: this.state.activePage,
      newPage: 1,
    };

    await this.setState({
      activePage: pages.newPage,
    });

    this.props.onFirstClick(pages);
  }

  async onPrevClick() {
    const pages: PaginationEventOptions = {
      currentPage: this.state.activePage,
      newPage: this.state.activePage - 1,
    };

    await this.setState({
      activePage: pages.newPage,
    });

    this.props.onPrevClick(pages);
  }

  async onNextClick() {
    const pages: PaginationEventOptions = {
      currentPage: this.state.activePage,
      newPage: this.state.activePage + 1,
    };

    await this.setState({
      activePage: pages.newPage,
    });

    this.props.onNextClick(pages);
  }

  async onLastClick(numberOfPages: number) {
    const pages: PaginationEventOptions = {
      currentPage: this.state.activePage,
      newPage: numberOfPages,
    };

    await this.setState({
      activePage: pages.newPage,
    });

    this.props.onFirstClick(pages);
  }

  async onItemClick(clickedItem: number) {
    const pages: PaginationEventOptions = {
      currentPage: this.state.activePage,
      newPage: clickedItem,
    };

    await this.setState({
      activePage: clickedItem,
    });

    this.props.onItemClick(pages);
  }

  render() {
    const numberOfPages = Math.ceil(this.props.totalItems / this.props.itemsPerPage);

    return (
      <BSPagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
        {
          this.props.useFirstLast
          && (
            <PaginationItem>
              <PaginationLink
                onClick={this.onFirstClick.bind(this)}
                disabled={this.state.activePage === 1}
                first
              />
            </PaginationItem>
          )
        }

        {
          this.props.usePrevNext
          && (
            <PaginationItem>
              <PaginationLink
                onClick={this.onPrevClick.bind(this)}
                disabled={this.state.activePage === 1}
                previous
              />
            </PaginationItem>
          )
        }

        {
          this.props.totalItems
          && this.buildPaginationItems(numberOfPages)
        }

        {
          this.props.usePrevNext
          && (
            <PaginationItem>
              <PaginationLink
                onClick={this.onNextClick.bind(this)}
                disabled={this.state.activePage === numberOfPages}
                next
              />
            </PaginationItem>
          )
        }

        {
          this.props.useFirstLast
          && (
            <PaginationItem>
              <PaginationLink
                onClick={this.onLastClick.bind(this, numberOfPages)}
                disabled={this.state.activePage === numberOfPages}
                last
              />
            </PaginationItem>
          )
        }
      </BSPagination>
    );
  }
}

export default Pagination;
