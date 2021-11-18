CREATE TABLE A(palavra varchar(46));
CREATE TABLE B(palavra varchar(46));
CREATE TABLE C(palavra varchar(46));
CREATE TABLE D(palavra varchar(46));
CREATE TABLE E(palavra varchar(46));
CREATE TABLE F(palavra varchar(46));
CREATE TABLE G(palavra varchar(46));
CREATE TABLE H(palavra varchar(46));
CREATE TABLE I(palavra varchar(46));
CREATE TABLE J(palavra varchar(46));
CREATE TABLE K(palavra varchar(46));
CREATE TABLE L(palavra varchar(46));
CREATE TABLE M(palavra varchar(46));
CREATE TABLE N(palavra varchar(46));
CREATE TABLE O(palavra varchar(46));
CREATE TABLE P(palavra varchar(46));
CREATE TABLE Q(palavra varchar(46));
CREATE TABLE R(palavra varchar(46));
CREATE TABLE S(palavra varchar(46));
CREATE TABLE T(palavra varchar(46));
CREATE TABLE U(palavra varchar(46));
CREATE TABLE V(palavra varchar(46));
CREATE TABLE W(palavra varchar(46));
CREATE TABLE X(palavra varchar(46));
CREATE TABLE Y(palavra varchar(46));
CREATE TABLE Z(palavra varchar(46));

CREATE TABLE palavras(
	palavra_id uuid DEFAULT uuid_generate_v4 (),
	palavra varchar(20),
	status int,
	PRIMARY KEY (palavra_id)
);
