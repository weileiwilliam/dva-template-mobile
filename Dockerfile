### 基础镜像
FROM registry-vpc.cn-hangzhou.aliyuncs.com/eigenlab/frontend-base

### source
COPY . /root/marco

WORKDIR /root/marco/frontend

### webpack 打包 react-generator
RUN cnpm install
RUN npm run build

RUN cp -rfp dist/* /root/web/ 