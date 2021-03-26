import React from 'react';
import { Grid } from '@material-ui/core'
import Store from '../Store'
// import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
// import { List, Avatar, Space } from 'antd';

const stores = [
  { id: 1, name: 'Target', description: 'One for all and all for one, Muskehounds are always ready. One for all and all for one, helping everybody.', location: 'Fairfield Dr.', image: 'https://i.pinimg.com/originals/50/55/4e/50554e7975371dbbdc8b5a39d39f0cb8.png'},
  { id: 2, name: 'Walmart', description: 'Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around.', location: 'Northwest Ave.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/722px-Walmart_Spark.svg.png' },
  { id: 3, name: 'Stater Bros.', description: 'Those medals you wear on your moth-eaten chest should be there for bungling at which you are best.', location: 'Southeast Ct.', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stater_Bros.svg/1200px-Stater_Bros.svg.png'},
  { id: 4, name: 'Food4Less', description: 'This is my boss, Jonathan Hart, a self-made millionaire, he’s quite a guy. ', location: 'Northsouth Ave.', image: 'https://cdn4.couponsherpa.com/images/merchants/large/food-4-less.png'},
  { id: 5, name: 'Dollar Tree', description: 'Dollar Tree supermarket', location: 'Overthere Ct.', image: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/03/Dollar_Tree_logo.png'},
  { id: 6, name: 'Aldi', description: 'Aldi supermarket', location: 'CPP Dr.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/AldiWorldwideLogo.svg/1200px-AldiWorldwideLogo.svg.png'},
  { id: 7, name: 'Trader Joes', description: 'Trader joes supermarket', location: 'Localstore Ave.', image: 'https://bloximages.newyork1.vip.townnews.com/yakimaherald.com/content/tncms/assets/v3/editorial/c/47/c4737aa0-f84f-11e5-9f06-8ba76135973e/56fee69315955.image.png?crop=1409%2C1409%2C0%2C30&resize=1409%2C1409&order=crop%2Cresize'},
  { id: 8, name: 'Albertsons', description: 'Albertsons supermarket', location: 'Grassycorner Ct.', image: 'https://dynl.mktgcdn.com/p/-sJEwT7l_pRtT5slgkxglRYsyd0AGtjbYeJD2XO-XXM/2500x2500.png'},
]

const GroceryStores = (props) => {
  return (
    <>
      <Grid container justify='center' spacing={3} style ={{
        backgroundColor: '#EE6590',
      }}>
        {stores.map((store) => (
          <Grid item key={store.id} xs={12} sm={6} md={4} lg={3}>
            <Store store={store} />
          </Grid>
        ))}
      </Grid>
    </>
    // <List
    //   itemLayout="vertical"
    //   size="large"
    //   pagination={{
    //     onChange: page => {
    //       console.log(page);
    //     },
    //     pageSize: 3,
    //   }}
    //   dataSource={listData}
    //   footer={
    //     <div>
    //       <b>ant design</b> footer part
    //     </div>
    //   }
    //   renderItem={item => (
    //     <List.Item
    //       key={item.title}
    //       actions={[
    //         <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
    //         <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
    //         <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
    //       ]}
    //       extra={
    //         <img
    //           width={272}
    //           alt="logo"
    //           src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    //         />
    //       }
    //     >
    //       <List.Item.Meta
    //         avatar={<Avatar src={item.avatar} />}
    //         title={<a href={item.href}>{item.title}</a>}
    //         description={item.description}
    //       />
    //       {item.content}
    //     </List.Item>
    //   )}
    // />
  )
}

export default GroceryStores;