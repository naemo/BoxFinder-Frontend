import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    paddingLeft: 40,
  },
  media: {
    width: "90vh",
    height: "50vh",
    margin: "100px 10px"
  },
}));

const Content = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <Typography component="div">
        <Box fontSize="h2.fontSize" fontWeight="fontWeightMedium" lineHeight={4} m={1}>
          BoxFinder - 공공데이터를 활용한 공컨테이너 수요와 공급 분석 및 예측 플랫폼
        </Box>
        <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" lineHeight={3} m={1}>
          <br />
          프로젝트 소개
        </Box>
        <Box fontSize="h5.fontSize" fontWeight="fontWeightLight" lineHeight={2} m={1}>
           공공 데이터를 이용한 공컨테이너 실시간 수요 예측, 빅데이터 분석 서비스
          <br />
           해운 물동량의 균형을 위해 지역별, 시기별 공컨테이너 과부족 정보를 분석하고, 앞으로의 공컨테이너 물동량을 예측하여 컨테이너 이동비를 절감하는 서비스.
          <br />
           코로나로 인한 물동량 감소 및 불안정하게 유지되는 공컨테이너 재고를 효율적으로 해결하는 웹 서비스 
        </Box>

        <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" lineHeight={3} m={1}>
          <br />
          구성도
        </Box>
        <CardMedia
          className={classes.media}
          image="/images/composition.png"
          title="Contemplative Reptile"
        />

        <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" lineHeight={3} m={1}>
          <br />
          개발 배경 및 필요성
        </Box>
        <Box fontSize="h5.fontSize" fontWeight="fontWeightLight" lineHeight={2} m={1}>
           2020년 불경기로 인한 국내 해운 산업의 폐업 사례 발생
          <br />
           코로나 19 사태로 인한 무역량의 감소로 인해 컨테이너 재고 처리가 불안정함
          <br />
           컨테이너 운송 스케줄을 공유해 컨테이너 이동비를 줄이는 시스템 필요
          <br />
           컨테이너 이동비를 줄이고, 해운 물동량의 균형을 찾는 공유 서비스가 필요함
          <br />
           본 서비스에서 컨테이너 과부족 정보를 등록하여 적재적소에 공컨테이너를 공유할 수 있는 체계를 개발하여 항만물류 업계의 물류 비용 절감에 기여 
        </Box>

        <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" lineHeight={3} m={1}>
          <br />
          주요 기능
        </Box>
        <Box fontSize="h5.fontSize" fontWeight="fontWeightLight" lineHeight={2} m={1}>
           컨테이너 타입별 정보관리
          <br />
           공컨테이너 정보 학습
          <br />
           월별 공유 컨테이너 예측
          <br />
           컨테이너 과부족 정보 알림
          <br />
           회원별 공컨테이너 등록
          <br />
           지역별 과부족 정보 시각화
          <br />
           월별 컨테이너 예측치 시각화 
        </Box>

        <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" lineHeight={3} m={1}>
          <br />
          특・장점
        </Box>
        <Box fontSize="h5.fontSize" fontWeight="fontWeightLight" lineHeight={2} m={1}>
           본 프로젝트의 빅데이터 분석 예측 모델은 POST-MIS에서 제공하는 기존 공공데이터를 활용하여, 각 항구/규격 별 공공데이터에 대해 구체적으로 해석이 가능한 화이트 박스 예측 모델이 될 예정임.
          <br />
           자동식별시스템이 자료를 생성하기 이전 자료까지 포함하여 보다 정확한 예측 및 분석을 제공해주려고 함
          <br />
           각 항구별 데이터 양식을 하나로 통합해서 컨테이너 관련 공공데이터를 전처리를 할 예정임. (컨테이너 관리 현황에 대한 데이터를 제공해주는 모든 항구들을 하나의 데이터 양식으로 통합시켜 전처리를 진행할 예정임.)
        </Box>

        <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" lineHeight={3} m={1}>
          <br />
          기대효과 및 활용분야
        </Box>
        <Box fontSize="h5.fontSize" fontWeight="fontWeightLight" lineHeight={2} m={1}>
           빅데이터를 활용한 수요과 공급을 예측하는 시스템으로 공컨테이너 활용도 증가
          <br />
           항만물류 업계의 물류 비용 절감 효과해운항만물류산업의 극심한 불황을 타개할 수 있는 해결책 제시
          <br />
           컨테이너 항구별 수출입 물동량 분석, 항만지역 교통량 분석, 공 컨테이너 재고 분석 등 효율적인 운영 관리 가능
          <br />
           선사의 컨테이너 담당자는 컨테이너 공급과 관련한 장기계획을 수립해 리스크를 극복 할 수 있음
        </Box>

      </Typography>
         </CardContent>
    </Card>
  );
};

Content.propTypes = {
  className: PropTypes.string
};

export default Content;
