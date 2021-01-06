import React, {Component} from 'react'
import {IBusinesses} from '../types'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './styled-components/PrimaryTag.jsx'
import Wrapper from './styled-components/Wrapper.jsx'

class Showcase extends Component {
  state = {
    selectedCategory: 'all',
  }

  getAllCategories = () => {
    const categoryArray = ['all']

    this.props.businesses.forEach((business) => {
      business.categories.forEach((category) => {
        if (!categoryArray.includes(category)) {
          categoryArray.push(category)
        }
      })
    })

    return categoryArray
  }

  filterBusinesses = () => {
    if (this.state.selectedCategory === 'all') {
      return this.props.businesses
    } else {
      return this.props.businesses.filter((business) =>
        business.categories.includes(this.state.selectedCategory)
      )
    }
  }

  handleClick = (event) => {
    this.setState({
      selectedCategory: event.target.id,
    })
  }

  render() {
    return (
      <Wrapper>
        <h1>All Businesses</h1>
        <h3>Filter by category</h3>
        <section className="category-container">
          {this.getAllCategories().map((category) => (
            <PrimaryTag
              key={category}
              id={category}
              $isSelected={this.state.selectedCategory === category}
              onClick={this.handleClick}
            >
              {category}
            </PrimaryTag>
          ))}
        </section>
        <section className="business-tile-container">
          {this.filterBusinesses().map((business) => (
            <BusinessTile key={business.id} business={business} />
          ))}
        </section>
      </Wrapper>
    )
  }
}

Showcase.propTypes = {
  businesses: IBusinesses.isRequired,
}

export default Showcase
