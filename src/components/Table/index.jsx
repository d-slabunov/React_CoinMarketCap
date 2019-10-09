import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table as AntdTable, Spin, Icon } from 'antd';
import { getCryptoCurrency } from '../../store/actions';
import './styles.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Price for hour',
    dataIndex: 'percent_change_1h',
    sorter: (a, b) => a.percent_change_1h.props.children - b.percent_change_1h.props.children,
  },
  {
    title: 'Price for day',
    dataIndex: 'percent_change_24h',
    sorter: (a, b) => a.percent_change_24h.props.children - b.percent_change_24h.props.children,
  },
  {
    title: 'Price for week',
    dataIndex: 'percent_change_7d',
    sorter: (a, b) => a.percent_change_7d.props.children - b.percent_change_7d.props.children,
  },
];

function Table({data, isLoading, error, getCryptoCurrency}) {
  useEffect(() => {
    getCryptoCurrency();
  }, [getCryptoCurrency]);

  const onRefreshData = () => {
    getCryptoCurrency();
  };

  return (
    <AntdTable
      columns={columns}
      dataSource={data}
      pagination={false}
      locale={{
        emptyText: isLoading ? <Spin size='large'/> :
          error && <>
            <div className='price-fallen'>{error}</div>
            <Icon className='icon-reload' type="reload" onClick={onRefreshData}/>
          </>
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.usersReducer.data,
    isLoading: state.usersReducer.isLoading,
    error: state.usersReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {getCryptoCurrency: () => dispatch(getCryptoCurrency())};
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)
