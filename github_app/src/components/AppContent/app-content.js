import React from 'react'
import PropTypes from 'prop-types';
import Search from '../Search/search'
import UserInfo from '../UserInfo/user-info'
import Actions from '../Actions/actions'
import Repos from '../Repos/repos'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
      <div className='app'>
            <Search isDisabled={isFetching} handleSearch={handleSearch} />
            {isFetching && <div>Carregando...</div>}
            {!!userinfo && <UserInfo userinfo={userinfo} />}
            {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
            {!!repos.length &&
                  <Repos
                        className='repos'
                        title='Repositórios:'
                        repos={repos}
                  />
            }
            {!!starred.length &&
                  <Repos
                        className='starred'
                        title='Favoritos:'
                        repos={starred}
                  />
            }

      </div>
)
AppContent.propTypes = {
      userinfo: PropTypes.object,
      repos: PropTypes.array.isRequired,
      starred: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
      handleSearch: PropTypes.func.isRequired,
      getRepos: PropTypes.func.isRequired,
      getStarred: PropTypes.func.isRequired
}

export default AppContent;