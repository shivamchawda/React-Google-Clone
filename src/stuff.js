<a
              className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && 
                item.pagemap?.cse_image [0]?.src && (
                  <img
                  className="searchPage_resultImage"
                  src={
                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                  }/>
                )}
              </a>