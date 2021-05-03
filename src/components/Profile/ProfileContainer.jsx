import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../redux/profile_reducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    const { profile, userStatus, updateUserStatus } = this.props
    return (
      <Profile
        profile={profile}
        userStatus={userStatus}
        updateUserStatus={updateUserStatus}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)