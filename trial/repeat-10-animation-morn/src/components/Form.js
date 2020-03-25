import React from 'react'


        <h4>IT WORKS</h4>
        <button type="button" onClick={this.handleOpen}>
          Animate me
        </button>
        <hr />
        {isOpen && (
          <CSSTransition
            appear
            in={isOpen}
            timeout={{
              // appear: 500,
              enter: 2000,
              exit: 300
            }}
            classNames={styles}
            mountOnEnter
            unmountOnExit
          >
            <div style={{ width: 400, height: 400 }}></div>
          </CSSTransition>